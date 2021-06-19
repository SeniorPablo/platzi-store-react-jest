import React from 'react'
import { mount, shallow } from 'enzyme'
import ProviderMock from '../../__mocks__/ProviderMock'
import Header from '../../components/Header'
import { create } from 'react-test-renderer'

describe('<Header />', () => {

    const header = mount(
        <ProviderMock>
            <Header />
        </ProviderMock>
    )
    test('Render del componente header', () => {
        expect(header.length).toEqual(1)
    })
    test('Render del título', () => {
        expect(header.find(".Header-title").text()).toEqual("Platzi Store")
    })
})

describe('Header Snapshot', () => {
    test('Comprobar el Snapshot de Header', () => {
        const header = create(
            <ProviderMock>
                <Header />
            </ProviderMock>
        )
        expect(header.toJSON()).toMatchSnapshot()
    })
})