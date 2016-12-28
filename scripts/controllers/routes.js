'use strict';

page('/', articleController.index);
page('/about', aboutController.index, repoView.renderRepos);
page('/admin', adminController.index);
page('/new', newController.index);
page();
