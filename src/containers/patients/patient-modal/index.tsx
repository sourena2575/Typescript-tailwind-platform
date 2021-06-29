import { useUi } from 'hooks'
import { lazy, memo } from 'react'
import { Confirm, Modal } from 'components'
import { usePatientModal } from './use-patient-modal'

const PatientForm = lazy(() =>
  import('containers').then((module) => ({ default: module.PatientForm }))
)
const PatientAssets = lazy(() =>
  import('containers').then((module) => ({ default: module.PatientAssets }))
)
const PatientInteractionsForm = lazy(() =>
  import('containers').then((module) => ({
    default: module.PatientInteractionsForm,
  }))
)
const PatientInteractionsList = lazy(() =>
  import('containers').then((module) => ({
    default: module.PatientInteractionsList,
  }))
)

export const PatientModal = memo(() => {
  const {
    deletePatient,
    deletePatientLoading,
    deleteInteraction,
    deleteInteractionLoading,
  } = usePatientModal()

  const {
    uiState: { dialog },
    toggleDialog,
  } = useUi()

  switch (dialog.type) {
    case 'patient-edit':
      return (
        <Modal
          size="xl"
          className="px-10 "
          onClose={() => toggleDialog({ open: false, type: null })}
          header={`Edit ${dialog.data.first_name} ${dialog.data.surename}'s informations`}
          withHeader
        >
          <PatientForm isEditing editInitials={dialog.data} />
        </Modal>
      )
    case 'patient-assets':
      return (
        <Modal
          size="sm"
          className="px-10 "
          onClose={() => toggleDialog({ open: false, type: null })}
          header={`${dialog.data.first_name} ${dialog.data.surename}'s assets`}
          withHeader
        >
          <PatientAssets item={dialog.data} />
        </Modal>
      )
    case 'patient-interactions-list':
      return (
        <Modal
          size="xl"
          className="px-10 "
          onClose={() => toggleDialog({ open: false, type: null })}
          header={`${dialog.data.first_name} ${dialog.data.surename}'s interactions`}
          withHeader
        >
          <PatientInteractionsList />
        </Modal>
      )
    case 'patient-interactions-form':
      return (
        <Modal
          size="sm"
          className="px-10 "
          onClose={() => toggleDialog({ open: false, type: null })}
          header={
            dialog.data.first_name
              ? `Add an interaction for ${dialog.data.first_name} ${dialog.data.surename}`
              : 'Edit interaction'
          }
          withHeader
        >
          <PatientInteractionsForm />
        </Modal>
      )
    case 'patient-delete':
      return (
        <Confirm
          type="delete"
          description={`You are about to delete ${dialog.data.first_name} ${dialog.data.surename}`}
          loading={deletePatientLoading}
          onConfirm={() => deletePatient()}
          onCancel={() => toggleDialog({ open: false, type: null })}
        />
      )
    case 'patient-interaction-delete':
      return (
        <Confirm
          type="delete"
          description={`You are about to delete this interaction.`}
          loading={deleteInteractionLoading}
          onConfirm={() => deleteInteraction()}
          onCancel={() => toggleDialog({ open: false, type: null })}
        />
      )
    default:
      return null
  }
})
