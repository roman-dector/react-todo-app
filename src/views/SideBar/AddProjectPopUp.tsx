import styles from './AddProjectPopUp.module.css'

import { Dispatch, FC, SetStateAction, useState } from 'react'
import {
  useForm,
  FormProvider,
  SubmitHandler,
  useFormContext,
} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { postNewProjectFx } from '../../store/projects'
import {
  NewProjectInitialDataType,
  ColorType,
} from '../../dal/apiDataTypes'

import { CancelSubmitBar } from '../../components/Button'
import { ItemIcon } from '../../components/ItemIcon'
import { FieldErrorMessage } from '../../components/Errors'

const schema = yup.object({
  title: yup.string().required(),
  color: yup.object({
    value: yup.string().required(),
    name: yup.string().required(),
  }),
})

const onSubmitForm: SubmitHandler<NewProjectInitialDataType> =
  data => {
    postNewProjectFx(data)
  }

export const AddProjectPopUp: FC<{
  closePopUp: () => void
}> = props => {
  const [colorsVisible, setColorsVisible] = useState(false)

  const formMethods = useForm<NewProjectInitialDataType>({
    defaultValues: {
      color: { value: 'gray', name: 'Gray' },
    },
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  })

  return (
    <div
      className={styles['pop-up-container']}
      onClick={e => {
        e.stopPropagation()
        setColorsVisible(false)
      }}
    >
      <div className={styles['pop-up']}>
        <div className={styles['header']}>Add project</div>
        <FormProvider {...formMethods}>
          <AddProjectForm
            colorsVisible={colorsVisible}
            setColorsVisible={setColorsVisible}
          />
        </FormProvider>
        <div className={styles['footer']}>
          <CancelSubmitBar
            onCanselHandler={props.closePopUp}
            onSubmitHandler={() => {
              formMethods.handleSubmit(onSubmitForm)()
              formMethods.formState.isValid && props.closePopUp()
            }}
          />
        </div>
      </div>
    </div>
  )
}

const AddProjectForm: FC<{
  colorsVisible: boolean
  setColorsVisible: Dispatch<SetStateAction<boolean>>
}> = props => {
  const {
    register,
    formState: { errors, touchedFields },
  } = useFormContext<NewProjectInitialDataType>()

  return (
    <form className={styles['form']}>
      <div>
        <label>Name</label>
        <input {...register('title')} />
        <FieldErrorMessage
          error={errors['title']}
          touched={touchedFields['title']}
        />
      </div>

      <div>
        <label>Color</label>
        <ColorSelect
          colorsVisible={props.colorsVisible}
          setColorsVisible={props.setColorsVisible}
        />
      </div>
    </form>
  )
}

const ColorSelect: FC<{
  colorsVisible: boolean
  setColorsVisible: Dispatch<SetStateAction<boolean>>
}> = props => {
  const { setValue } = useFormContext<NewProjectInitialDataType>()

  const [selectedColor, selectColor] = useState({
    value: 'gray',
    name: 'Gray',
  })

  const colors = [
    { value: 'salmon', name: 'Salmon' },
    { value: 'green', name: 'Green' },
    { value: 'blue', name: 'Blue' },
    { value: 'red', name: 'Red' },
    { value: 'pink', name: 'Pink' },
    { value: 'orange', name: 'Orange' },
    { value: 'gray', name: 'Gray' },
  ]

  const onColorItemClickCreator =
    (color: ColorType, selected: boolean) =>
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation()
      if (!selected) {
        selectColor(color)
        setValue('color', color)
      }
      props.setColorsVisible(!props.colorsVisible)
    }

  return (
    <div>
      <div className={styles['selected-color']}>
        <ColorItem
          {...selectedColor}
          onClickHandler={onColorItemClickCreator(
            selectedColor,
            true
          )}
        />
      </div>

      <div style={props.colorsVisible ? {} : { display: 'none' }}>
        <div className={styles.options}>
          {colors.map(color => (
            <div className={styles['hover']}>
              <ColorItem
                {...color}
                key={color.value}
                onClickHandler={onColorItemClickCreator(color, false)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const ColorItem: FC<{
  value: string
  name: string
  onClickHandler?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void
}> = props => (
  <div className={styles['color']} onClick={props.onClickHandler}>
    <ItemIcon color={props.value} />
    <span style={{ display: 'inline-blok', marginTop: '2px' }}>
      {props.name}
    </span>
  </div>
)
