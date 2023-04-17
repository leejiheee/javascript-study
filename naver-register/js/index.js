$(".register").click(function () {
  const id = $("#inputId").val();
  const password = $("#inputPwd").val();
  const passwordRe = $("#inputPwd2").val();
  const name = $("#inputName").val();
  const year = $("#inputYear").val();
  const month = $("#inputMonth").val();
  const day = $("#inputDay").val();
  const gender = $("#gender").val();
  const phone = $("#inputNum").val();

  if (!id) {
    //이메일에 입력된게 없을 때
    alert("아이디 입력은 필수입니다.");
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
    alert("비밀번호 입력은 필수입니다.");
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

  if (!name) {
    //이름이 입력 안됐을때
    alert("이름은 필수정보입니다!");
  }

  if (!year) {
    //
  }
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
