import * as vscode from 'vscode';
import * as child_process from 'child_process';

// 定义常量
const COMMAND_ID = 'devspace-wizard.openCmdHere';
const STATUS_BAR_PRIORITY = 100;

// 命令执行器接口
interface CommandExecutor {
    execute(path: string): void;
}

// Windows CMD 执行器
class WindowsCmdExecutor implements CommandExecutor {
    execute(path: string): void {
        const command = `start cmd.exe /K "cd /d "${path}""`;
        child_process.exec(command, (error) => {
            if (error) {
                vscode.window.showErrorMessage(`打开 CMD 失败: ${error.message}`);
            }
        });
    }
}

// 状态栏管理类
class StatusBarManager {
    private statusBarItem: vscode.StatusBarItem;

    constructor() {
        // 创建并配置状态栏项
        this.statusBarItem = vscode.window.createStatusBarItem(
            vscode.StatusBarAlignment.Left,
            STATUS_BAR_PRIORITY
        );
        this.configure();
    }

    private configure(): void {
        this.statusBarItem.text = "$(terminal)CMD";
        this.statusBarItem.tooltip = "在项目根目录打开 CMD";
        this.statusBarItem.command = COMMAND_ID;
    }

    // 显示状态栏项
    show(): void {
        this.statusBarItem.show();
    }

    // 获取状态栏项用于销毁
    getStatusBarItem(): vscode.StatusBarItem {
        return this.statusBarItem;
    }
}

// 命令处理类
class CommandHandler {
    private executor: CommandExecutor;

    constructor(executor: CommandExecutor) {
        this.executor = executor;
    }

    // 处理命令执行
    async handle(): Promise<void> {
        const workspacePath = this.getWorkspacePath();
        
        if (!workspacePath) {
            vscode.window.showWarningMessage('没有打开的工作区！');
            return;
        }

        try {
            this.executor.execute(workspacePath);
        } catch (error) {
            vscode.window.showErrorMessage(`执行命令失败: ${error}`);
        }
    }

    // 获取工作区路径
    private getWorkspacePath(): string | undefined {
        const workspaceFolders = vscode.workspace.workspaceFolders;
        return workspaceFolders?.[0]?.uri.fsPath;
    }
}

// 扩展激活入口
export function activate(context: vscode.ExtensionContext) {
    try {
        // 创建状态栏管理器
        const statusBarManager = new StatusBarManager();
        statusBarManager.show();

        // 创建命令处理器
        const commandHandler = new CommandHandler(new WindowsCmdExecutor());

        // 注册命令
        const disposable = vscode.commands.registerCommand(
            COMMAND_ID,
            () => commandHandler.handle()
        );

        // 注册到订阅列表
        context.subscriptions.push(
            disposable,
            statusBarManager.getStatusBarItem()
        );

        console.log('DevSpace Wizard 扩展已激活！');
    } catch (error) {
        console.error('扩展激活错误:', error);
        throw error;
    }
}

// 扩展停用时的清理
export function deactivate() {
    // 清理资源（如果需要）
}
