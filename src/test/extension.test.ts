import * as assert from 'assert';

// 你可以导入并使用 'vscode' 模块中的所有 API
// 以及导入你的扩展来测试它
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';

// 定义扩展测试套件
suite('Extension Test Suite', () => {
	// 显示一条信息，表示所有测试开始
	vscode.window.showInformationMessage('Start all tests.');

	// 定义一个示例测试
	test('Sample test', () => {
		// 断言数组 [1, 2, 3] 中不包含 5
		assert.strictEqual(-1, [1, 2, 3].indexOf(5));
		// 断言数组 [1, 2, 3] 中不包含 0
		assert.strictEqual(-1, [1, 2, 3].indexOf(0));
	});
});
