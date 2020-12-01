<template>
  <div>
    <div
      class="item"
      v-for="(item, index) of list"
      :key="index"
    >
      <div class="item-title border-bodttom">
        <span class="item-title-icon"></span>
        {{item.title}}
        <div v-if="item.children" class="item-children">
          <detail-list :list="item.children"></detail-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: ['list'],
}
</script>

<style lang="stylus" scoped>
  .item-title-icon
    position: relative
    left: .06rem
    top: .1rem
    display: inline-block
    width .36rem
    height .36rem
    background url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606833860986&di=a6be81d08ff9ef81ccc0af95ec09187b&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F16%2F16%2F0556aedbe53918e.jpg) no-repeat
    margin-right .1rem
    background-size .4rem .3rem
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
  .item-children
    padding: 0 .1rem


</style>
