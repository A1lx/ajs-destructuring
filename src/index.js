export default function destructor(obj) {
  const { special } = obj;

  special.forEach((element) => {
    if (!Object.prototype.hasOwnProperty.call(element, 'description')) {
      element.description = 'Описание недоступно';
    }
  });

  return special;
}
