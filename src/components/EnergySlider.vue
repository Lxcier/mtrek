<!-- <template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <h2 class="title-1-white mb-1">Calcule Sua Economia!</h2>
            <p class="text-body-1">Quanto você gasta de luz, em média, por mês?</p>
            <div class="mt-4">
              <v-slider
                v-model="gastoMensal"
                :max="maxRange"
                :step="step"
                track-color="green lighten-4"
                thumb-color="green darken-2"
                thumb-label="always"
              >
                <template v-slot:append>
                  <span class="text-h5 font-weight-bold">
                    R$ {{ gastoMensal.toFixed(2) }}
                  </span>
                </template>
              </v-slider>
              <div class="mt-4">
                <span class="text-body-1">
                  Economia anual: <strong>R$ {{ economiaAnual.toFixed(2) }}</strong>
                </span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      gastoMensal: 200,
      maxRange: 8000,
    };
  },
  computed: {
    step() {
      if (this.gastoMensal > 5000) return 200;
      if (this.gastoMensal > 1000) return 100;
      return 50;
    },
    economiaAnual() {
      return this.gastoMensal * 0.15 * 12;
    },
  },
};
</script> -->