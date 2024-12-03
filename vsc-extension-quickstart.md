# 欢迎使用您的 VS Code 扩展

## 文件夹中的内容

* 该文件夹包含您的扩展所需的所有文件。
* `package.json` - 这是声明您的扩展和命令的清单文件。
  * 示例插件注册了一个命令，并定义了其标题和命令名称。通过这些信息，VS Code 可以在命令面板中显示该命令。它还不需要加载插件。
* `src/extension.ts` - 这是您提供命令实现的主文件。
  * 该文件导出一个函数 `activate`，这是您的扩展首次被激活时调用的函数（在本例中通过执行命令激活）。在 `activate` 函数中，我们调用 `registerCommand`。
  * 我们将包含命令实现的函数作为第二个参数传递给 `registerCommand`。

## 设置

* 安装推荐的扩展（amodio.tsl-problem-matcher, ms-vscode.extension-test-runner, 和 dbaeumer.vscode-eslint）

## 立即启动并运行

* 按 `F5` 打开一个加载了您扩展的新窗口。
* 通过按下 (`Ctrl+Shift+P` 或在 Mac 上按 `Cmd+Shift+P`) 并输入 `Hello World` 从命令面板运行您的命令。
* 在 `src/extension.ts` 中设置断点以调试您的扩展。
* 在调试控制台中找到来自您扩展的输出。

## 进行更改

* 在 `src/extension.ts` 中更改代码后，您可以从调试工具栏重新启动扩展。
* 您也可以重新加载 (`Ctrl+R` 或在 Mac 上按 `Cmd+R`) VS Code 窗口以加载您的更改。

## 探索 API

* 打开文件 `node_modules/@types/vscode/index.d.ts` 时，您可以查看我们 API 的完整集合。

## 运行测试

* 安装 [Extension Test Runner](https://marketplace.visualstudio.com/items?itemName=ms-vscode.extension-test-runner)
* 通过 **Tasks: Run Task** 命令运行 "watch" 任务。确保此任务正在运行，否则可能无法发现测试。
* 从活动栏打开测试视图并点击 "Run Test" 按钮，或使用快捷键 `Ctrl/Cmd + ; A`
* 在测试结果视图中查看测试结果的输出。
* 对 `src/test/extension.test.ts` 进行更改或在 `test` 文件夹中创建新的测试文件。
  * 提供的测试运行器只会考虑名称模式为 `**.test.ts` 的文件。
  * 您可以在 `test` 文件夹中创建文件夹，以任何您想要的方式组织您的测试。

## 更进一步

* 通过[打包您的扩展](https://code.visualstudio.com/api/working-with-extensions/bundling-extension)来减少扩展大小并提高启动时间。
* 在 VS Code 扩展市场上[发布您的扩展](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)。
* 通过设置[持续集成](https://code.visualstudio.com/api/working-with-extensions/continuous-integration)来自动化构建。
