import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoBareStringsInTemplateOption = {
  /**
   * @see [no-bare-strings-in-template](https://eslint.vuejs.org/rules/no-bare-strings-in-template.html)
   */
  allowlist?: any;

  /**
   * @see [no-bare-strings-in-template](https://eslint.vuejs.org/rules/no-bare-strings-in-template.html)
   */
  attributes?: any;

  /**
   * @see [no-bare-strings-in-template](https://eslint.vuejs.org/rules/no-bare-strings-in-template.html)
   */
  directives?: any;
};

/**
 * Options.
 */
export type NoBareStringsInTemplateOptions = [NoBareStringsInTemplateOption?];

/**
 * disallow the use of bare strings in `<template>`
 *
 * @see [no-bare-strings-in-template](https://eslint.vuejs.org/rules/no-bare-strings-in-template.html)
 */
export type NoBareStringsInTemplateRuleConfig = RuleConfig<NoBareStringsInTemplateOptions>;

/**
 * disallow the use of bare strings in `<template>`
 *
 * @see [no-bare-strings-in-template](https://eslint.vuejs.org/rules/no-bare-strings-in-template.html)
 */
export interface NoBareStringsInTemplateRule {
  /**
   * disallow the use of bare strings in `<template>`
   *
   * @see [no-bare-strings-in-template](https://eslint.vuejs.org/rules/no-bare-strings-in-template.html)
   */
  'vue/no-bare-strings-in-template': NoBareStringsInTemplateRuleConfig;
}
