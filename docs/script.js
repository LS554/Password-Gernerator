const output_box = document.getElementById('output_box');

function generate_password() {
    var generatePassword = (
        length = 20,
        wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
      ) =>
        Array.from(crypto.getRandomValues(new Uint32Array(length)))
          .map((x) => wishlist[x % wishlist.length])
          .join('')
      
      console.log("Generated password: " + generatePassword())
      output_box.value = generatePassword();
}

function copy_password() {
    output_box.select();
    document.execCommand('copy');
    output_box.blur();
}

