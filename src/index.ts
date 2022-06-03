/* eslint-disable no-console */
const samples = [
  // OK
  '12+(123*23)',
  '2*[12+(123*23)]',
  '2*[1+(+)+2+(123*23)]',
  'a(b[cd]as)',
  '([asd(234)]a(b[cd]as))',
  '2344',
  '23434()',
  '234[]34',
  '[]34',
  '',
  // KO
  '298374(23423',
  '298374(23)423)',
  '[298(374(23)423)',
  '[298(374]23)42',
  '[2942',
  '2942)',
  '29(42)]',
  '29(42[)]',
  '29(]34',
  '(34]34',
];

const checkExpression = (sample: string): boolean => {
  const {length} = sample;
  return length > 7;
}

console.table(
  samples.map(sample => ({
    sample,
    ok: checkExpression(sample)
  })
));
