import classNames from 'classnames'
import React, { ComponentPropsWithoutRef, forwardRef } from 'react'
import { FormState } from 'react-hook-form'
import { Button } from '../landing'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    formState?: FormState<any>
}

export const SaveButton = forwardRef<any, ButtonProps>(
    ({ className, children = 'Save', formState, ...props }, ref) => {
        if (!formState) {
            return null
        }
        return (
            <Button
                // colorScheme={formState.isDirty ? 'blue' : 'gray'}
                disabled={!formState.isDirty}
                isLoading={formState.isSubmitting}
                type='submit'
                className={classNames(
                    formState.isDirty ? 'bg-blue-500' : 'bg-gray-500',
                    className,
                )}
                {...props}
            >
                {children}
            </Button>
        )
    },
)

SaveButton.displayName = 'SaveButton'
