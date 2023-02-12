export default function getSpecialAttack({ special }) {
  return special.map((item) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = item;
    return {
      id, name, description, icon,
    };
  });
}
