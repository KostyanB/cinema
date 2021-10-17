// форматирование суммы по установленной локали
import env from '../env.json';

const formatCostToLocale = value => value.toLocaleString('ru', { style: 'currency', currency: env.total.currency, minimumFractionDigits: 0 });
export default formatCostToLocale;