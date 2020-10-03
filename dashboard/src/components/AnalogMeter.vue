<template>
    <div :class='computedClasses'>
        <p>{{title}}</p>
        <div class="progress__number">{{~~convertedValue}}{{prefix}}</div>
    </div>
</template>

<script>
export default {
  name: 'analogmeter',
  props: {
      title: String,
      min: Number,
      max: Number,
      dispmin: Number,
      dispmax: Number,
      mode: String,
      speed: Number,
      prefix: String,
  },
  data() {
    return {
        progress: 0,
        timer: null,
        keyframe: Math.random() * 10,
    }
  },
  created() {
    clearInterval(this.timer)
    this.timer = setInterval(()=>{
        this.keyframe += this.speed

        let range = this.max - this.min 
        switch(this.mode) {
            case 'updown':
                {
                    let x = Math.abs((Math.sin(this.keyframe) * range))
                    this.progress = ~~(x + this.min)
                }
                break;
            case 'random':
                default:
                this.progress = ~~(Math.random()*range + this.min)
            break;
        }
    }, 10000 * this.speed)
  },
  destroyed() {
    clearInterval(this.timer)
  },
  mounted() {
  },
  computed: {
    computedClasses() {
        const prg = `progress--${this.progress}`
        return `progress--circle ${prg}`
    },
    convertedValue() {
        return this.convertRange( this.progress,  [ this.min, this.max ] ,[ this.dispmin, this.dispmax ])
    }
  },
  methods: {
    convertRange( value, r1, r2 ) { 
        return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
    }
  }
}
</script>

<style scoped lang="scss">

$spacing: 0.5rem;
$themeColor: black;
$backColor: #66ffff;
$size: 40px;

p {
    font-size: 14px;
    line-height: 19px;
}

.progress--circle {
    position: relative;
  display: inline-block;
  margin: $spacing;
  width: $size;
  height: $size;
  border-radius: 50%;
  background-color: $backColor;
  &:before {
    content: '';
    position: absolute;
    top: 24.5px;
    left: 5px;
    width: $size - 10px;
    height: $size - 10px;
    border-radius: 50%;
    background-color: #66ffff;
  }
  &:after {
    content: '';
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 50%; 
    background-color: $themeColor;
  }
}

.progress__number {
  position: absolute;
  top: 50%;
  width: 100%;
  line-height: 1.5rem;
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.6rem;
  color: black;
}

.progress--pie {
  &:before {
    display: none; /* Get rid of white circle for "pie chart style" meter */
  }
  .progress__number {
    color: white;
  }
}

/**
* $step is set to 5 by default, meaning you can only use percentage classes in increments of five (e.g. 25, 30, 45, 50, and so on). This helps to reduce the size of the final CSS file. If you need a number that doesn't end in 0 or 5, you can change the text percentage while rounding the class up/down to the nearest 5.
*/
$step: 1;
$loops: round(100 / $step);
$increment: 360 / $loops;
$half: round($loops / 2);
@for $i from 0 through $loops {
  .progress--bar.progress--#{$i * $step}:after {
    width: $i * $step * 1%;
  }
  .progress--circle.progress--#{$i * $step}:after {
    @if $i < $half {
      $nextDeg: 90deg + ($increment * $i);
      background-image: linear-gradient(90deg, $backColor 50%, transparent 50%, transparent), linear-gradient($nextDeg, $themeColor 50%, $backColor 50%, $backColor);
    }
    @else {
      $nextDeg: -90deg + ($increment * ($i - $half));
      background-image: linear-gradient($nextDeg, $themeColor 50%, transparent 50%, transparent), linear-gradient(270deg, $themeColor 50%, $backColor 50%, $backColor);
    }
  }
}
</style>