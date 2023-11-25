import "./Registration.css";

function Registration() {
  return (
    <div>
      <div class="container ">
        <div class="row registration-form text-center">
          <h2 class="text-success text-center registration-border">
            Qeydiyyat
          </h2>

          <div class="registration-form-border p-5">
            <label for="f-name">Ad :</label>
            <input
              type="text "
              maxlength="15"
              onkeydown="return /[a-z]/i.test(event.key)"
              name="f-name"
              id="f-name"
              class="f-name"
              placeholder="Adınızı qeyd edin"
            />
            <br />
            <label for="s-name" class="mt-3">
              Soyad :
            </label>
            <input
              type="text"
              maxlength="18"
              onkeydown="return /[a-z]/i.test(event.key)"
              id="s-name"
              placeholder="Soyadınızı qeyd edin"
            />
            <br />
            <label for="father-name" class="mt-3">
              Ata adı :
            </label>
            <input
              type="text"
              maxlength="15"
              onkeydown="return /[a-z]/i.test(event.key)"
              name="father-name"
              placeholder="Ata adınızı qeyd edin"
            />
            <br />
            <label for="birthDate" class="control-label mt-3">
              Doğum ilinizi qeyd edin
            </label>
            <input type="date" id="birthDate" class="form-control" /> <br />
            <label for="mobile" class="mt-3">
              Telefon nömrəsi :
            </label>
            <select name="" id="">
              <option value="">010</option>
              <option value="">050</option>
              <option value="">051</option>
              <option value="">055</option>
              <option value="">070</option>
              <option value="">077</option>
              <option value="">099</option>
              <option value="">060</option>
            </select>
            <input
              type="number"
              id="mobile-enter"
              name="mobile-enter"
              placeholder="Telefon nömrənizi qeyd edin"
            />
            <br />
            <label for="" class="mt-3">
              E-mailiniz qeyd edin
            </label>
            <input type="text" placeholder="E-mailinizi qeyd edin" />
            <br />
            <label for="" class="mt-3">
              Şəhər/Rayon :
            </label>
            <select name="" id="">
              <option value="">Baki</option>
              <option value="">Gəncə</option>
              <option value="">Astara</option>
            </select>
            <br />
            <div class="row">
              <div class="col-8">
                <button class="register-btn">Qeydiyyatı tamamla</button>
              </div>

              <div class="col-4">
                <a href="#" class="login-enter">
                  Daxil ol
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
