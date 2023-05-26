const Mock = require('mockjs')

const Random = Mock.Random

function getComponentList() {
    return [
        // Info
        {
            fe_id: 'c1',
            type: 'questionInfo',
            title: 'information of questionnaire',
            isHidden: false,
            isLocked: false,
            props: { title: 'questionnaire title', desc: 'description...' }
        },
        // Title
        {
            fe_id: 'c2',
            type: 'questionTitle',
            title: 'title',
            isHidden: false,
            isLocked: false,
            props: { text: 'Personal Information Research', level: 1, isCenter: false }
        },
        // Input
        {
            fe_id: 'c3',
            type: 'questionInput',
            title: 'input 1',
            isHidden: false,
            isLocked: false,
            props: { title: 'your name', placeholder: 'enter name...' }
        },
        // Input
        {
            fe_id: 'c4',
            type: 'questionInput',
            title: 'input 2',
            isHidden: false,
            isLocked: false,
            props: { title: 'your phone', placeholder: 'enter phone No. ...' }
        },
        // Textarea
        {
            fe_id: 'c5',
            type: 'questionTextarea',
            title: 'Multi-line input',
            isHidden: false,
            isLocked: false,
            props: { title: 'your favorite', placeholder: 'please enter...' }
        },
        // Paragraph
        {
            fe_id: 'c6',
            type: 'questionParagraph',
            title: 'paragraph',
            isHidden: false,
            isLocked: false,
            props: { text: 'One line paragraph 1\nOne line paragraph 2', isCenter: false }
        },
        // Radio
        {
            fe_id: 'c7',
            type: 'questionRadio',
            title: 'Single choice',
            isHidden: false,
            isLocked: false,
            props: {
                title: 'Single choice title',
                isVertical: false,
                options: [
                  { value: 'item1', text: 'Option 1' },
                  { value: 'item2', text: 'Option 2' },
                  { value: 'item3', text: 'Option 3' },
                ],
                value: '',
              }
        },
        // Checkbox
        {
            fe_id: 'c8',
            type: 'questionCheckbox',
            title: 'multi-option',
            isHidden: false,
            isLocked: false,
            props: {
                title: 'multi-option title',
                isVertical: false,
                list: [
                    { value: 'item1', text: 'Option 1', checked: true },
                    { value: 'item2', text: 'Option 2', checked: false },
                    { value: 'item3', text: 'Option 3', checked: false },
                ],
              }
        }
    ]
}

module.exports = getComponentList
