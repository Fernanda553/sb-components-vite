import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, type Props} from "../components/MyLabel";

const meta: Meta<Props>= {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    tags:['autodocs'],
    parameters:{
        layout: 'centered'
    },
    argTypes:{
        size:{control: 'inline-radio'},
        fontColor:{control: 'color'}
    }
} satisfies Meta <typeof MyLabel>

export default meta
type Story = StoryObj<typeof meta>

export const AllCaps: Story = {
    args:{
        label:'All caps label',
        size:'normal',
        allCaps: true
    }
}

export const Secondary: Story = {
    args:{
        label:'Secondary label',
        color: 'text-secondary'
    }
}

export const CustomColors: Story = {
    args:{
        label:'Custom Colors label',
        fontColor: '#ddd'
    }
}

export const CustomBackgroundColor: Story = {
    args:{
        label:'No label',
        size: 'h1',
        fontColor: '#fff',
        backgroundColor:'#000'
    }
}