<template>
  <div class="myImageFactory">
    <p>
      Hier kan je fotos uploaden om te gebruiken op je site. Ze worden direct naar je website geupload.
      Om de laadtijd van je website te verlagen worden je fotos geoptimaliseerd. Bewaar het origineel dus goed. 
    </p>
    <p>
      Het optimalisatie process schaalt de plaatjes naar een verhouding van 16x9 en verminderd het aantal pixels in de breedte tot 350px. We supporten alleen JPEG en PNG omdat deze door de meeste browsers geaccepteerd worden. 
    </p>
    <div class="columns is-centered">
      <div class="column is-one-quarter">
        <button v-if="isLoading" class="button is-primary is-loading">UpLoading</button>

        <div v-if="!isLoading" class="file is-boxed is-primary">
          <label class="file-label">
            <input @change="uploadimage" class="file-input" type="file" name="foto" accept="image/jpeg|image/png|image/jpg">
            <span class="file-cta">
              <span class="file-icon">
                <i class="mdi mdi-upload"></i>
              </span>
              <span class="file-label">
                Kies een PNG of JPEG…
              </span>
            </span>
          </label>
        </div>
      </div>
    </div>

    <div v-if="errors.length" class="notification is-danger">
      <ul>
        <li v-for="error in errors" :key="error.index">{{ error }}</li>
      </ul>
    </div>


  </div>
</template>

<script>

import UploadRepository from "@/repository/UploadRepository";

export default {
  name: 'ImageFactory',
  components: {
  },
  data() {
    return {
      isLoading: false,
      email: null,
      errors: [],
    }
  },
  methods: {
    readImage: function(image) {
      // eslint-disable-line
      return new Promise(function(resolve, reject) {
        var reader = new FileReader();
        reader.onloadend = function (e) {
            resolve({
              fileName: image.name,
              result: e.target.result.split(',')[1], 
              error: e.target.error
            });
        };   
        reader.readAsDataURL(image);
        console.log(reject)
      })
    },
    uploadimage: async function(event) {
      this.errors = [];
      const files = event.target.files;

      if (files.length <= 0) {
        this.errors.push("Geen file geselecteerd")
      }

      if (files.length > 1) {
        this.errors.push("U kan maar 1 file per keer uploaden")
      }
      const image = files[0];

      if (this.errors.length == 0) {
        this.isLoading = true;
        try {

          // convert to base64
          const  database64 = await this.readImage(image)
          const payload= {
            'name':database64.fileName,
            'content':database64.result,
          }
          console.log(payload)

          // upload image
          const { data } = await UploadRepository.upload(payload)
          if (data.statusCode == 200) {
            console.log(data)
          } else {
            console.log(data)
            this.errors.push('Sorry, Er is een technische storing, we kunnen uw foto niet uploaden.');
          }
          this.isLoading = false;

          
        } catch (error) {
          this.errors.push(error.message);
          console.log(Object.keys(error))
          console.log(error.response)
          this.isLoading = false;
        }
      }

    },
  },
}
</script>