import * as migration_20260414_095944 from './20260414_095944';
import * as migration_20260421_152126_team_and_gallery_placeholders from './20260421_152126_team_and_gallery_placeholders';

export const migrations = [
  {
    up: migration_20260414_095944.up,
    down: migration_20260414_095944.down,
    name: '20260414_095944',
  },
  {
    up: migration_20260421_152126_team_and_gallery_placeholders.up,
    down: migration_20260421_152126_team_and_gallery_placeholders.down,
    name: '20260421_152126_team_and_gallery_placeholders'
  },
];
