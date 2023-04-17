$(".register").click(function () {
  const id = $("#inputId").val();
  const password = $("#inputPwd").val();
  const passwordRe = $("#inputPwd2").val();
  const name = $("#inputName").val();
  const year = $("#inputYear").val();
  const month = $("#inputMonth").val();
  const day = $("#inputDay").val();
  const gender = $("#gender").val();
  const tel = $("#inputNum").val();

  if (!id) {
    //이메일에 입력된게 없을 때
    alert("아이디를 입력해주세요.");
    return;
  } else {
    //이메일이 입력됐을 때
    if (!emailCheck(id)) {
      //이메일 형식에 맞지 않을 때
      alert("아이디는 이메일 형식으로 입력해주세요.");
      return;
    }
  }

  if (!password) {
    //비밀번호 입력 안됐을때
    alert("비밀번호를 입력해주세요.");
    return;
  }
  //비밀번호가 입력됐을때
  else {
    if (!pwdCheck(password)) {
      //비밀번호 형식이 맞지 않을때
      alert(
        "비밀번호는 특수문자 / 문자 / 숫자 포함 형태의 8~15자리로 입력해주세요."
      );
      return;
    }
  }

  if (password != passwordRe) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  if (!name) {
    //이름이 입력 안됐을때
    alert("이름을 입력해주세요.");
    return;
  }

  if (!year) {
    alert("태어난 년도 4자리를 정확하게 입력하세요.");
    return;
  }

  if (!month) {
    alert("태어난 월을 선택하세요.");
    return;
  }

  if (!day) {
    alert("태어난 일(날짜) 2자리를 정확하게 입력하세요.");
    return;
  }

  if (!gender) {
    alert("성별을 선택해주세요.");
    return;
  }

  if (!telCheck(tel)) {
    alert("형식에 맞지 않는 번호입니다.");
    return;
  }

  alert("회원가입이 완료되었습니다.");
  location.href = 'http://www.naver.com';
});

// 정규식
function pwdCheck(password) {
  //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합)
  const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  return reg.test(password); //맞으면 true, 틀리면 false를 준다.
}

function emailCheck(id) {
  const reg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return reg.test(id); //맞으면 true, 틀리면 false를 준다.
}

//전화번호 정규식
function telCheck(tel) {
  const reg = /^\d{2,3}\d{3,4}\d{4}$/;
  return reg.test(tel);
}
