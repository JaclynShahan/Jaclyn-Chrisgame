function Alien (name, power, evil) {
    this.name = name;
    this.power = power;
    this.evil = evil;
    this.batteryLevel = 50;
    this.useAttack = (person) => {
      if (this.batteryLevel < 20) {
      this.recharge()
      } else {
          this.batteryLevel -= 20 
          person.health -= 20
      }
      
    }
    this.recharge = () => {
      this.batteryLevel += 50
    }
    this.health = 100;
  
    }
  
  var jaclynQueenAmazing = new Alien ('Rawr', 'controlling everything', true)
  console.log(jaclynQueenAmazing)
  
  var chrisDeeDoo = new Alien ('DurkaDurka', 'snotting', false)
  chrisDeeDoo.useAttack(jaclynQueenAmazing)
  console.log(chrisDeeDoo)
  chrisDeeDoo.useAttack(jaclynQueenAmazing)
  console.log(chrisDeeDoo)
  chrisDeeDoo.useAttack(jaclynQueenAmazing)
  
  chrisDeeDoo.useAttack(jaclynQueenAmazing)
  chrisDeeDoo.useAttack(jaclynQueenAmazing)
  chrisDeeDoo.useAttack(jaclynQueenAmazing)
  console.log(chrisDeeDoo)
  console.log(jaclynQueenAmazing)
  