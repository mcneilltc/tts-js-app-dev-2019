// Given number and configuration object for noun,
// return phrase for that number of the noun.

//const pluralize = (number, stem, suffix = 's') =>
//  `${number} ${stem}${number === 1 ? '' : suffix}`;
const pluralize = (number, configuration) =>
  `${number}${''}${ number === 1 ?(configuration.singular ? configuration.singular :configuration.singular + configuration.suffix): configuration.plural}`
  //const pluralize = (number, configuration ) =>
  //`${number} ${number === 1 ? configuration.singular : (configuration.suffix === undefined ? configuration.singular + configuration.suffix : configuration.plural)}`
  //${configuration === number<= 6? configuration.plural : (number> 1 configuration.singular + configuration.suffix): (number< 1 configuration.singular))}`;
  //${number=== 1 ? (configuration.singular? configuration.singular: configuration.singular + configuration.suffix) : configuration.plural}`;

  

const thing = {
  singular: 'thing',
  suffix: 's',
};
console.log(pluralize(1, thing));
console.log(pluralize(0, thing));
console.log(pluralize(2, thing));

const sheep = {
  singular: 'sheep',
  suffix: '',
};
console.log(pluralize(1, sheep));
console.log(pluralize(3, sheep));

const ox = {
  singular: 'ox',
  suffix: 'en',
};
console.log(pluralize(1, ox));
console.log(pluralize(2, ox));

const inch = {
  singular: 'inch',
  suffix: 'es',
};
console.log(pluralize(1.0, inch));
console.log(pluralize(1.5, inch));

const goose = {
  singular: 'goose',
  plural: 'geese',
};
console.log(pluralize(1, goose));
console.log(pluralize(6, goose));
