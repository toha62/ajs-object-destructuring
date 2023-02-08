export default function getSpecialAttack(character) {
  const { special } = character;

  return special.map((item) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = item;
    return {
      id, name, description, icon,
    };
  });
}
