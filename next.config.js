/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages:[
        'antd',
        "@ant-design/pro-card",
        "@ant-design/pro-descriptions",
        "@ant-design/pro-field",
        "@ant-design/pro-form",
        "@ant-design/pro-layout",
        "@ant-design/pro-list",
        "@ant-design/pro-provider",
        "@ant-design/pro-skeleton",
        "@ant-design/pro-table",
        "@ant-design/pro-utils",
    ]
}

module.exports = nextConfig
