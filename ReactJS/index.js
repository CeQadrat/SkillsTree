import React from 'react';
import ReactDOM from 'react-dom';

import Tree from './components/Tree';
import tree from '../skills_tree_example.json';

ReactDOM.render(<Tree item={tree} color={0} />, document.body);
