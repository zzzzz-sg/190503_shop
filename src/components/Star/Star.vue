<template>
      <div class="star" :class="`star-${size}`">
          <span class="star-item on" v-for="(sc, index) in starClasses" :class="sc" :key="index"></span>
      </div>
</template>
<script>
    const Class_on = 'on'
    const Class_half = 'half'
    const Class_off = 'off'

    export default {
        props:{
            score:Number,
            size:Number
        },
        computed: {
            starClasses() {
                const {score} = this
                const scs = []
                // 向scs中塞入n个on
                const scoreInteger = Math.floor(score)
                for (let i= 0 ; i < scoreInteger; i++) {
                    scs.push(Class_on)
                }
                // 向scs中塞入0/1个half
                let miniscore = score - scoreInteger;
                if(miniscore >= 0.5) {
                    scs.push(Class_half)
                }
                while(scs.length < 5) {
                    scs.push(Class_off)
                }
                // 向scs中塞入n个off
                return scs
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    display inline-block
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
</style>