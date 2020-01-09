<template>
  <div class="ProfileImageCircle" :class="`length${imageUrls.length}`" :style="cssVars">
    <img v-for="(image, index) in imageUrls" :key="index" class="ProfileRadiusWrap" :src="image" />
  </div>
</template>

<script>
export default {
  props: {
    imageUrls: {
      require: true,
      type: Array
    },
    customWidth: {
      require: false,
      type: Number
    }
  },
  computed: {
    cssVars() {
      return {
        "--custom-width": (this.customWidth || 40) + "px",
        "--custom-width-half": (this.customWidth / 2 || 40 / 2) + "px"
      };
    }
  }
};
</script>

<style>
.ProfileImageCircle {
  border-radius: 50%;
  display: grid;
  width: var(--custom-width);
  height: var(--custom-width);
  grid-template-columns: var(--custom-width-half) var(--custom-width-half);
  grid-template-rows: var(--custom-width-half) var(--custom-width-half);
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MThDMTE3OTQ0MTQxMUU3ODI0MUM3OUU0MTFEOEJFNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MThDMTE3QTQ0MTQxMUU3ODI0MUM3OUU0MTFEOEJFNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkxOEMxMTc3NDQxNDExRTc4MjQxQzc5RTQxMUQ4QkU3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkxOEMxMTc4NDQxNDExRTc4MjQxQzc5RTQxMUQ4QkU3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rrxe4wAAB9NJREFUeNrsnPtv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");
  background-size: cover;
}
.ProfileImageCircle img:nth-child(1) {
  border-top-left-radius: 100%;
}
.ProfileImageCircle img:nth-child(2) {
  border-top-right-radius: 100%;
}
.ProfileImageCircle img:nth-child(3) {
  border-bottom-left-radius: 100%;
}
.ProfileImageCircle img:nth-child(4) {
  border-bottom-right-radius: 100%;
}
.ProfileImageCircle.length1 img:nth-child(1) {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  border-radius: 100%;
}
.ProfileImageCircle.length2 img:nth-child(1) {
  grid-row-start: 1;
  grid-row-end: 3;
  border-top-left-radius: var(--custom-width-half);
  border-bottom-left-radius: var(--custom-width-half);
}
.ProfileImageCircle.length2 img:nth-child(2) {
  grid-row-start: 1;
  grid-row-end: 3;
  border-top-right-radius: var(--custom-width-half);
  border-bottom-right-radius: var(--custom-width-half);
}
.ProfileImageCircle.length3 img:nth-child(3) {
  grid-column-start: 1;
  grid-column-end: 3;
  border-bottom-left-radius: var(--custom-width-half);
  border-bottom-right-radius: var(--custom-width-half);
}

.ProfileImageCircle img {
  width: 100%;
  height: 100%;
}
</style>