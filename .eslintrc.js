module.exports = {
  /**
   * - áp dụng cho những file có cùng thư mục
   * - ưu tiên cấu hình gần nhất
   *  ex :
   *      root
   *        .eslintrc.js
   *        fileroot.js
   *        fodel1
   *           .eslintrc.js // áp dụng cho fodel1
   *           file1.js
   */
  root: true,
  /**
   * cấu hình môi trường
   */
  env: {
    node: true,
  },
  /**
   * kế thừa các cấu hình đã có sẵn
   */
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
  ],
  /**
   * theo mặc định sẽ convert qua es5
   * có thể cấu hình ECMAScript versions bằng cách chỉ định ở dưới
   */
  parserOptions: {
    ecmaVersion: 2020, // same as 11 es11
  },
  /**
   * cấu hình rule để áp dụng cho file , mặc định đã được có sẵn trong extends
   */
  rules: {
    /**
     * cấu hình mặc định :
     * String: {
          message: 'Use string instead',
          fixWith: 'string',
        },
        ...
        var t : String = "123" // error here -> replace string
     */
    '@typescript-eslint/ban-types': 'off',
    /**
     * cài đặt phân cách
     
      interface Foo {
          name: string;
          greet(): void;
      }

      type Bar = {
          name: string;
          greet(): void;
      }

      multiline : áp dụng cho nhiều dòng trong interface or type
      sigleline : áp dụng cho 1 dòng trong interface or type
      multilineDetection : như thế nào là nhiều dòng

      2.option:
      
      delimiter: mỗi paramester phải đi với
        comma : dấu ,
        semi : dấu ;
        none: không gì cả // không áp dụng cho single line 

      requireLast: xác định xem param cuối cùng có dấu cách hay không
        true
        false

     */
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
        },
        singleline: {
          delimiter: 'comma',
        },
      },
    ],
    /**
     * cho phép sử dụng kiểu dữ liệu là any
     */
    '@typescript-eslint/no-explicit-any': 'off',
    /**
     * cho phép những kiểu dữ liệu có thể lấy giá trị từ request
       var foo = require('foo');
       const foo = require('foo');
       let foo = require('foo');
     */
    '@typescript-eslint/no-var-require': 'off',
    // const a = async() => never
    // const a = async () => always;
    'space-before-function-paren': ['error', 'never'],
    // không có khoáchr cách giữa đâu và cuối trong mảng , default : never
    'vue/array-bracket-spacing': 'error',
    // khoảng cách đầu cuối trong arrow function
    // default: { "before": true, "after": true }
    // true : one or more spaces
    // false : no space
    'vue/arrow-spacing': 'error',
    // khoảng cách trong 1 khối
    // mặc định always
    'vue/block-spacing': 'error',
    // cấu hình khối . mặc định 1tbs
    //function foo() {
    //return true;
    //}
    'vue/brace-style': 'error',
    // quy tắc đặt tên , mặc định always
    'vue/camelcase': 'error',
    // cho phép có dấy phẩy ở object hay arr hay không
    // mặc định "never"
    'vue/comma-dangle': 'error',
    // thực thi các component theo kebab-case
    // ThanhHuy -> thanh-huy
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    // thực hiện so sánh === và !==
    // mặc định always
    'vue/eqeqeq': 'error',
    // thực thi mã , yêu cầu ít nhất có 1 khoảng trống giữa key và value
    // mặc định :["error", { "beforeColon": false }]
    // false : không yêu cầu
    // true" có
    'vue/key-spacing': 'error',
    // xác định name trong file phải giống với tên phải theo camelCase , hoặc keba-case
    'vue/match-component-file-name': 'error',
    // xác định khoảng trống sau dấu ngoặc nhọn
    // mặc định: "never"
    'vue/object-curly-spacing': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
