// 生成验证码
function generateCaptcha() {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");

  // 设置画布尺寸
  canvas.width = 200;
  canvas.height = 80;

  // 创建随机验证码
  var captchaText = generateRandomText(6);

  // 绘制验证码
  ctx.font = "40px Arial";
  ctx.fillStyle = "#000000";
  ctx.fillText(captchaText, 50, 50);

  // 获取验证码图片的base64编码
  var captchaImage = canvas.toDataURL();

  // 将验证码图片输出到注册页面
  var imgElement = document.getElementById("captchaImage");
  imgElement.src = captchaImage;

  // 存储验证码，用于验证
  localStorage.setItem("captcha", captchaText);
}

// 生成随机字符串
function generateRandomText(length) {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var text = "";

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    text += chars.charAt(randomIndex);
  }

  return text;
}

// 验证输入的验证码是否正确
function checkCaptcha(event) {
  event.preventDefault(); // 阻止表单提交的默认行为

  var inputCaptcha = document.getElementById("inputCaptcha").value;
  var savedCaptcha = localStorage.getItem("captcha");

  if (inputCaptcha === savedCaptcha) {
    alert("验证码正确！注册成功！");
    // 在此处添加注册逻辑
  } else {
    alert("验证码错误！请重新输入。");
    generateCaptcha();
  }
}

// 页面加载完成后生成验证码
window.onload = generateCaptcha;
