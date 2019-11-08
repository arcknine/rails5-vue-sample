<template>
  <div class="col s12 m6 l6">
    <div id="validation">
      <div class="card-content">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">account_circle</i>
              <input id="name4" type="text" class="validate">
              <label for="name4" class="">Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">email</i>
              <input id="email4" type="email" class="validate">
              <label for="email4" class="">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">question_answer</i>
              <textarea id="message4" class="materialize-textarea validate"></textarea>
              <label for="message4" class="">Message</label>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <button class="btn cyan waves-effect waves-light right" type="submit" name="action">Submit
                  <i class="material-icons right">send</i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact-form'
}
</script>