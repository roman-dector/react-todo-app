import { Dispatch, FC, SetStateAction, useState } from 'react'
import styles from './AddProjectPopUp.module.css'

import { CancelSubmitBar } from './common/Button'
import { ItemIcon } from './common/ItemIcon'

import {
  useForm,
  FormProvider,
  SubmitHandler,
  useFormContext,
} from 'react-hook-form'

type AddProjectFormDataType = {
  name: string
  color: { value: string; name: string }
}

const onSubmitForm: SubmitHandler<AddProjectFormDataType> = data => {}

export const AddProjectPopUp: FC<{
  closePopUp: () => void
}> = props => {
  const [colorsVisible, setColorsVisible] = useState(false)

  const formMethods = useForm<AddProjectFormDataType>({
    defaultValues: {
      name: '',
      color: { value: 'gray', name: 'Gray' },
    },
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
              props.closePopUp()
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
  const { register } = useFormContext()

  return (
    <form className={styles['form']}>
      <div>
        <label>Name</label>
        <input {...register('name')} />
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

  return (
    <div>
      <div className={styles['selected-color']}>
        <ColorItem
          {...selectedColor}
          colorsVisible={props.colorsVisible}
          selectColor={selectColor}
          setColorsVisible={props.setColorsVisible}
        />
      </div>

      <div style={props.colorsVisible ? {} : { display: 'none' }}>
        <div className={styles.options}>
          {colors.map(color => (
            <div className={styles['hover']}>
              <ColorItem
                {...color}
                key={color.value}
                colorsVisible={props.colorsVisible}
                selectColor={selectColor}
                setColorsVisible={props.setColorsVisible}
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
  colorsVisible: boolean
  selectColor?: Dispatch<
    SetStateAction<{
      value: string
      name: string
    }>
  >
  setColorsVisible: Dispatch<SetStateAction<boolean>>
}> = props => (
  <div
    className={styles['color']}
    onClick={e => {
      e.stopPropagation()
      if (!!props.selectColor) {
        props.selectColor({ name: props.name, value: props.value })
      }
      props.setColorsVisible(!props.colorsVisible)
    }}
  >
    <ItemIcon color={props.value} />
    <span style={{ display: 'inline-blok', marginTop: '2px' }}>
      {props.name}
    </span>
  </div>
)
