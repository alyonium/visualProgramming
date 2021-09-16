<template>
  <el-row>
    <el-col :span="16" :offset="4">
      <img src="https://www.tadviser.ru/images/8/8e/SpaceX.png" alt="spaceX" class="image" />
      <div class="text-block">
        On Wednesday, September 15 at 8:02 p.m. EDT, 00:02 UTC on September 16, SpaceX’s Falcon 9
        successfully launched the Inspiration4 mission – the world’s first all-civilian human
        spaceflight to orbit – from historic Launch Complex 39A at NASA’s Kennedy Space Center in
        Florida. Approximately three days after liftoff, Dragon and the crew of Inspiration4 will
        splash down at one of several possible landing sites off the Florida coast. Follow Dragon’s
        journey in the tracker above as the Inspiration4 crew orbits Earth approximately every 90
        minutes. Inspiration4 is commanded by Jared Isaacman, founder and CEO of Shift4 Payments and
        an accomplished pilot and adventurer. Joining him are Medical Officer Hayley Arceneaux, a
        physician assistant at St. Jude Children’s Research Hospital® and pediatric cancer survivor;
        Mission Specialist Chris Sembroski, an Air Force veteran and aerospace data engineer; and
        Mission Pilot Dr. Sian Proctor, a geoscientist, entrepreneur, and trained pilot. The
        Inspiration4 mission is part of Jared’s ambitious fundraising goal to give hope to all kids
        with cancer and other life-threatening diseases. Visit St. Jude Children's Research Hospital
        to learn how you can help the Inspiration4 crew reach their $200M fundraising goal. During
        their multi-day journey in orbit, the Inspiration4 crew will conduct scientific research
        designed to advance human health on Earth and during future long-duration spaceflights.
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SpaceX',
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.image {
  width: 400px;
}

.text-block {
  overflow: scroll;
  height: 300px;
}
</style>
