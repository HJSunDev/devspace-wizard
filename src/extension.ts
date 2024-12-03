// 'vscode' 模块包含 VS Code 扩展性 API
// 导入该模块并在下面的代码中使用别名 vscode 引用它
import * as vscode from 'vscode';

// 当扩展被激活时调用此方法
// 扩展在第一次执行命令时被激活
export function activate(context: vscode.ExtensionContext) {

	// 使用控制台输出诊断信息（console.log）和错误（console.error）
	// 此行代码仅在扩展激活时执行一次
	console.log('恭喜，你的扩展 "devspace-wizard" 现在已激活！');

	// 命令已在 package.json 文件中定义
	// 现在通过 registerCommand 提供命令的实现
	// commandId 参数必须与 package.json 中的 command 字段匹配
	const disposable = vscode.commands.registerCommand('devspace-wizard.helloWorld', () => {
		// 此处放置的代码将在每次执行命令时执行
		// 向用户显示一个消息框
		vscode.window.showInformationMessage('来自 DevSpace Wizard 的问候！');
	});

	context.subscriptions.push(disposable); 
}

// 当扩展被停用时调用此方法
export function deactivate() {}
