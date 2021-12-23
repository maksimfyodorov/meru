import { IListColumns } from '@base/list/models/list-column.model';
import { IListRows } from '@base/list/models/list.model';

export const COLUMNS: IListColumns = [ {
  id: 'id',
  title: {
    ru: 'Идентификатор',
    en: 'Identifier'
  },
  sortable: true,
  type: 'number'
}, {
  id: 'string',
  title: {
    ru: 'Строковая',
    en: 'String'
  },
  sortable: true,
  type: 'string',

}, {
  id: 'number',
  title: {
    ru: 'Число',
    en: 'Number col'
  },
  sortable: true,
  type: 'number',
  renderer: {
    type: 'number',
    options: {
      format: '1.1-2'
    }
  }
}, {
  id: 'boolean',
  title: 'Логическое значение',
  sortable: true,
  type: 'boolean',
  renderer: {
    type: 'map',
    options: {
      map: {
        'true': 'Конечно',
        'false': 'Нет конечно'
      }
    }
  }
}, {
  id: 'datetime',
  title: 'Дата',
  sortable: true,
  type: 'datetime',
  renderer: {
    type: 'datetime',
    options: {
      format: {
        ru: 'dd.MM.yyyy',
        en: 'yyyy-MM-dd'
      }
    }
  }
}, {
  id: 'status',
  title: 'Статус',
  sortable: true,
  type: 'number',
  renderer: {
    type: 'status',
    options: {
      map: {}
    }
  }
}, {
  id: 'actions',
  title: 'Действия',
  sortable: false,
  type: 'string',
  renderer: {
    type: 'actions',
    options: {
      actions: [ {
        label: 'Деактивировать',
        isDanger: true,
        buttonType: 'link',
        params: {
          id: 'delete',
          'route': ''

        },
        condition: {
          type: 'visible',
          expression: 'status === 1'
        }
      }, {
        label: 'Активировать',
        params: {
          id: 'cancel',
          'route': ''

        },
        condition: {
          type: 'visible',
          expression: 'status === 2'
        }
      }, {
        label: 'Any action',
        buttonType: 'primary',
        params: {
          id: 'cancel',
          'route': ''
        },
        condition: {
          type: 'visible',
          expression: 'status === 3'
        }
      } ],
      direction: 'row'
    }
  }
} ];

export const ROWS: IListRows = [ {
  id: 0,
  string: 'Какая-то строка 1',
  number: 1001,
  boolean: true,
  datetime: '2018-09-09',
  status: 1
}, {
  id: 0,
  string: 'Какая-то строка 1',
  number: 1001,
  boolean: true,
  datetime: new Date(),
  status: 2
}, {
  id: 0,
  string: 'Какая-то строка 1',
  number: 1001,
  boolean: true,
  status: 3
}, {
  id: 0,
  string: 'Какая-то строка 1',
  number: 1001,
  boolean: true,
  status: 1
}, {
  id: 0,
  string: 'Какая-то строка 1',
  number: 1001,
  boolean: true,
  status: 1
}, {
  id: 0,
  string: 'Какая-то строка 1',
  number: 1001,
  boolean: true,
  status: 2
}, {
  id: 0,
  string: 'Какая-то строка 1',
  number: 1001,
  boolean: true,
  status: 2
} ];
