import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_team" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Unser Team' NOT NULL,
  	"subheading" varchar,
  	"show_placeholders" boolean DEFAULT true,
  	"placeholder_count" numeric DEFAULT 3,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_gallery" ADD COLUMN "show_placeholders" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_gallery" ADD COLUMN "placeholder_count" numeric DEFAULT 6;
  ALTER TABLE "pages_blocks_gallery" ADD COLUMN "placeholder_label" varchar DEFAULT 'Foto folgt';
  ALTER TABLE "pages_rels" ADD COLUMN "team_members_id" integer;
  ALTER TABLE "pages_blocks_team" ADD CONSTRAINT "pages_blocks_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_team_order_idx" ON "pages_blocks_team" USING btree ("_order");
  CREATE INDEX "pages_blocks_team_parent_id_idx" ON "pages_blocks_team" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_team_path_idx" ON "pages_blocks_team" USING btree ("_path");
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_team_members_fk" FOREIGN KEY ("team_members_id") REFERENCES "public"."team_members"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_rels_team_members_id_idx" ON "pages_rels" USING btree ("team_members_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_team" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_team" CASCADE;
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_team_members_fk";
  
  DROP INDEX "pages_rels_team_members_id_idx";
  ALTER TABLE "pages_blocks_gallery" DROP COLUMN "show_placeholders";
  ALTER TABLE "pages_blocks_gallery" DROP COLUMN "placeholder_count";
  ALTER TABLE "pages_blocks_gallery" DROP COLUMN "placeholder_label";
  ALTER TABLE "pages_rels" DROP COLUMN "team_members_id";`)
}
