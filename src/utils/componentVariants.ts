import classNames, { Argument } from 'classnames';

export const createVariantClassName =
  (componentName: string) => (variantType: string, variant: unknown) =>
    [componentName, variantType, variant].join('-');

export const createComponentClassNames =
  (componentName: string, styles: Record<string, string>) =>
  (variants: Record<string, string>, ...classes: Argument[]) => {
    const variantClassNames = Object.entries(variants)
      .reduce(
        (acc, [variant, value]) => [
          ...acc,
          styles[`${componentName}-${variant}-${value}`],
        ],
        [] as string[]
      )
      .filter(Boolean);
    return classNames(
      styles[componentName] || '',
      ...variantClassNames,
      ...classes
    );
  };
