export default function foo(obj) {
  return obj.special.map((item) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = item;
    return {
      id, name, description, icon,
    };
  });
}
