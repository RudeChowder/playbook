/* @flow */

import React from 'react'
import classnames from 'classnames'

import { globalProps } from '../utilities/globalProps'
import {
  buildAriaProps,
  buildCss,
  buildDataProps,
} from '../utilities/props'

import Body from '../pb_body/_body'
import SelectableCard from '../pb_selectable_card/_selectable_card'
import SelectableIcon from '../pb_selectable_icon/_selectable_icon'

type SelectableCardIconProps = {
  aria?: Object,
  checked?: boolean,
  checkmark: boolean,
  className?: string,
  customIcon?: SVGElement,
  dark?: boolean,
  data?: Object,
  disabled?: boolean,
  icon?: string,
  inputId?: string,
  multi?: boolean,
  name?: string,
  titleText?: string,
  bodyText?: string,
  value?: string,
  onChange?: (e) => void,
}

const SelectableCardIcon = (props: SelectableCardIconProps) => {
  const {
    aria = {},
    checkmark = false,
    checked = false,
    className,
    customIcon,
    dark = false,
    data = {},
    disabled = false,
    icon,
    inputId,
    multi = true,
    name,
    titleText,
    bodyText,
    value,
    onChange,
  } = props

  const ariaProps = buildAriaProps(aria)
  const dataProps = buildDataProps(data)

  const classes = classnames(
    buildCss('pb_selectable_card_icon_kit', {
      checked: checked,
      disabled: disabled,
      enabled: !disabled,
    }),
    globalProps(props),
    className
  )

  return (
    <div
        {...ariaProps}
        {...dataProps}
        className={classes}
    >
      <SelectableCard
          checked={checked}
          customIcon={customIcon}
          dark={dark}
          disabled={disabled}
          icon={checkmark}
          inputId={inputId}
          multi={multi}
          name={name}
          onChange={onChange}
          value={value}
      >
        {
          <>
            <SelectableIcon
                customIcon={customIcon}
                icon={icon}
                inputs="disabled"
                size="2x"
                text={titleText}
            />
            <Body
                color="light"
                dark={dark}
                text={bodyText}
            />
          </>
        }
      </SelectableCard>
    </div>
  )
}

export default SelectableCardIcon
