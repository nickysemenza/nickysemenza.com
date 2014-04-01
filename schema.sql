drop table if exists videos;
create table videos (
  id integer primary key autoincrement,
  title text not null,
  'text' text not null
);
