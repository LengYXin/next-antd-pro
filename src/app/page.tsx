"use client";
import { ProCard, ProForm, BetaSchemaForm } from '@ant-design/pro-components';
import { Button, ConfigProvider, Divider } from 'antd';
import enUS from 'antd/locale/en_US';
import Table from '@/components/table'
export default function Home() {
  return (
    <ConfigProvider
      locale={enUS}
      prefixCls='test'
      theme={{
        token: {
          // colorPrimary: '#f00'
          colorPrimary: '#10086'
        }
      }}>
      <main className="flex flex-col items-center justify-between p-24">
        <Button type='primary'>
          我是按钮
        </Button>
        <Divider>ProForm</Divider>
        <ProForm>
          <ProCard>
            <Button type='primary'>
              我是按钮
            </Button>
          </ProCard>
        </ProForm>
        <Divider>DrawerForm</Divider>
        <BetaSchemaForm trigger={<Button >
          DrawerForm 表单按钮
        </Button>} layoutType="DrawerForm" columns={[]} />
        <Table/>
      </main>
    </ConfigProvider>
  )
}
