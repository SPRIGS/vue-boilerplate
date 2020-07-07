let faker = require('faker');
let _ = require('lodash');

module.exports = _.times(100, (n) => {
    return {
        id: n,
        title: faker.lorem.words(_.random(1, 6)),
        type: 'video',
        thumbnail_url: faker.image.imageUrl(),
        duration: `0${_.random(9)}:${_.random(10, 59)}`,
        created_at: '2020-05-07T14:09:50.000000Z',
        updated_at: '2020-05-08T09:13:30.000000Z',
        file_url:
            'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4',
        categories: _.times(_.random(4), (n) => {
            return {
                id: n,
                name: faker.random.arrayElement([
                    'Music',
                    'Theater',
                    'PopKultur',
                ]),
                thumbnail_url: faker.image.imageUrl(),
            };
        }),
    };
});
