import { useCallback, useMemo, useState } from 'react'
import { useError, useService } from 'hooks'
import { Api } from 'utils'

import { PatientInteractionListActions } from './patient-interaction-list-actions'
import { PatientInteractionListDate } from './patient-interaction-list-date'
import { PatientInteractionListDetails } from './patient-interaction-list-details'

const columns = [
  {
    head: 'Interaction type',
    key: 'interaction_type',
    width: 'w-1/6',
  },
  {
    head: 'Interaction date',
    key: 'interaction_datetime',
    width: 'w-1/5',
    render: (item) => PatientInteractionListDate({ item }),
  },
  { head: 'Contact admin', key: 'contact_admin', width: 'w-1/6' },
  {
    head: 'Contact details',
    key: 'contact_details',
    width: 'w-2/3',
    render: (item) => PatientInteractionListDetails({ item }),
  },
  {
    head: '',
    key: 'details',
    width: 'w-[0px]',
    render: (item) => PatientInteractionListActions({ item }),
  },
]

export const usePatientInteractionList = () => {
  const [params, setParams] = useState({ page: null, search: null })
  const { useGet } = useService()
  const { onError } = useError()

  const { data, isLoading, isFetching } = useGet({
    key: ['PATIENT_INTERACTION_LIST', params],
    url: Api.interactions,
    onFocus: false,
    keepPreviousData: true,
    onError,
  })

  return {
    columns,
    data: data ? data.data : { count: 0, results: [] },
    isLoading: useMemo(() => isLoading || isFetching, [isLoading, isFetching]),
    page: useMemo(() => params.page, [params.page]),
    onPaginate: useCallback(
      (index) => {
        setParams((prev) => ({ ...prev, page: index }))
      },
      [params.page]
    ),
    onSearch: useCallback(
      (event) => {
        setTimeout(() => {
          setParams((prev) => ({
            ...prev,
            page: 1,
            search: event.target.value,
          }))
        }, 500)
      },
      [params.search]
    ),
  }
}
