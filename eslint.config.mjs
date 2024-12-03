// 导入 TypeScript ESLint 插件
import typescriptEslint from "@typescript-eslint/eslint-plugin";
// 导入 TypeScript 解析器
import tsParser from "@typescript-eslint/parser";

// 导出 ESLint 配置
export default [{
    // 指定要应用此配置的文件类型
    files: ["**/*.ts"],
}, {
    // 配置 ESLint 插件
    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    // 配置语言选项
    languageOptions: {
        // 使用 TypeScript 解析器
        parser: tsParser,
        // 指定 ECMAScript 版本为 2022
        ecmaVersion: 2022,
        // 指定源代码类型为模块
        sourceType: "module",
    },

    // 配置 ESLint 规则
    rules: {
        // 命名约定规则，警告不符合 camelCase 或 PascalCase 的导入
        "@typescript-eslint/naming-convention": ["warn", {
            selector: "import",
            format: ["camelCase", "PascalCase"],
        }],

        // 强制使用大括号包裹代码块
        curly: "warn",
        // 强制使用全等比较
        eqeqeq: "warn",
        // 禁止抛出字面量作为异常
        "no-throw-literal": "warn",
        // 强制使用分号
        semi: "warn",
    },
}];