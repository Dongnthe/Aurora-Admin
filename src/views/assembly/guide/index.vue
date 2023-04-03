<template>
  <div class='card content-box'>
    <span>引导页</span>
    <el-alert title="引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于 driver.js." type="warning" :closable="false" />
    <div id="Aurora">
      <el-button type="primary" @click.prevent.stop="guide">打开引导页 🤹‍♂️</el-button>
    </div>
  </div>
</template>
 
<script setup lang='ts'>
import Driver from "driver.js"
import "driver.js/dist/driver.min.css"

const guide = () => {
  const driver: Driver = new Driver({
    allowClose: false,
    doneBtnText: "结束",
    closeBtnText: "关闭",
    nextBtnText: "下一步",
    prevBtnText: " 上一步"
  })
  driver.defineSteps(steps)
  driver.start()
}

const steps = [
  {
    element: "#collapseIcon",
    popover: {
      title: "折叠Icon",
      description: "打开或关闭侧边栏",
      position: "right"
    }
  },
	{
		element: "#breadcrumb",
		popover: {
			title: "Breadcrumb",
			description: "Indicate the current page location",
			position: "right"
		}
	},
	{
		element: "#message",
		popover: {
			title: "Message Notification",
			description: "Can receive company information",
			position: "left"
		}
	},
	{
		element: "#fullscreen",
		popover: {
			title: "Full Screen",
			description: "Full Screen, Exit The Full Screen Page",
			position: "left"
		}
	}
]


</script>
 
<style lang="scss" scoped>
.el-button {
	margin-top: 20px;
}
</style>