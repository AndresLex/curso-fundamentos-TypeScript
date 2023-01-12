(() => {
  //Aqui TS infiere el dato
  let isEnable = true;
  // isEnable = 'as'; //Da error ya que es boolean
  isEnable = false;

  // Aqui se hace de forma explicita
  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);

  const random = Math.random();
  console.log(random);
  isNew = random >= 0.5 ? true : false;
  console.log('isNew', isNew);
})();
