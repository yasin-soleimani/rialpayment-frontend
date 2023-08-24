<template>
  <div class="justify-content-center col-md-12">
    <div class="text-right d-flex justify-content-right">
      <h4>مشخصات کارت اعتباری</h4>
    </div>
    <div class="card-container col-md-12 col-sm-12 col-xs-12 mx-auto">
      <div class="front mt-6">
        <div class="col-md-3 rounded image">
          <img
            src="../../assets/img/curved-images/logo-circle-rialpayment.png"
            alt="logo"
          />
        </div>
        <div class="card-number">
          <h3 class="text-white col-sm-6:h1">5859-8311-0842-9100</h3>
          <p class="text-white text-right">محمد یاسین سلیمانی</p>
          <small
            class="
              d-flex
              justify-content-left
              text-left text-white
              font-weight-bold
            "
            style="justify-content: left"
            >تاریخ انقضاَ: 1401/8/12</small
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardPayment",
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");

.container form .inputBox input,
.container form .inputBox select {
  margin-top: 5px;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  color: #444;
  width: 100%;
  height: 40px;
  border-radius: 10px;
}

.container form .flexbox {
  display: flex;
  gap: 15px;
}

.container form .flexbox .inputBox {
  flex: 1 1 150px;
}

.container form .flexbox .inputBox .year-input,
.container form .flexbox .inputBox .cvv-input,
.container form .flexbox .inputBox .month-input {
  padding: 5px;
  color: #444;
}

.container form .flexbox .inputBox .cvv-input {
  /* text-indent: 5px; */
  appearance: none;
}

.container form .submit-btn {
  display: block;
  /* height: 40px; */
  padding: 10px;
  width: 100%;
  margin-top: 20px;
  background: linear-gradient(45deg, blueviolet, deepPink);
  color: #fff;
  font-size: 18px;
  transition: 0.2s linear;
  cursor: pointer;
}

.container form .submit-btn:hover {
  letter-spacing: 2px;
  opacity: 0.8;
}

.container .card-container {
  // position: relative;
  height: 360px;
  width: 400px;
}

.container .card-container .front {
  display: flex;
  flex-direction: column;
  position: absolute;
  // top: 10px;
  // top: 0;
  // left: 0;
  // height: 100%;
  // width: 100%;
  background: linear-gradient(45deg, #100a3a, #5144a5);
  border-radius: 10px;
  backface-visibility: hidden;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  padding: 20px;
  transform: perspective(1000px) rotateY(0deg);
  transition: transform 0.4s ease-in-out;
}

.container .card-container .front .image {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding-top: 10px; */
}

.container .card-container .front .image img {
  height: 80px;
}

.container .card-container .front .image .chip-img {
  top: 20px;
}

.container .card-container .front .card-number {
  color: #fff;
  padding: 20px 0px;
}

.container .card-container .front .flexbox {
  display: flex;
}

.container .card-container .front .flexbox .box:nth-child(1) {
  margin-right: auto;
}

.container .card-container .front .flexbox .box {
  font-size: 15px;
  color: #fff;
}

.container .card-container .back {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(45deg, blueviolet, deepPink);
  backface-visibility: hidden;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  padding: 10px 0;
  border-radius: 10px;
  text-align: right;
  backface-visibility: hidden;
  transform: perspective(1000px) rotateY(180deg);
  transition: transform 0.4s ease-in-out;
}

.container .card-container .back .stripe {
  background: #000;
  height: 40px;
  width: 100%;
  margin: 10px 0;
}

.container .card-container .back .box {
  padding: 0 20px;
}

.container .card-container .back span {
  color: #fff;
  font-size: 15px;
  display: block;
  text-align: left;
}

.container .card-container .back .cvv-box {
  height: 50px;
  background: #fff;
  color: #333;
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  width: 100%;
}

.container .card-container .back img {
  margin-top: 10px;
  height: 80px;
}
</style>
