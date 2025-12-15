#!/usr/bin/env node
/**
 * Vendor MD3 Tokens from CORAPAN
 * 
 * Copies Material Design 3 token files from corapan-webapp into this project
 * to maintain standalone deployability while reusing design tokens.
 * 
 * Usage:
 *   npm run vendor:md3
 * 
 * Environment:
 *   CORAPAN_MD3_DIR - Override source directory (default: ../corapan-webapp/static/css/md3/)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const PROJECT_ROOT = join(__dirname, '..');
const VENDOR_DIR = join(PROJECT_ROOT, 'src', 'styles', 'vendor');
const DEFAULT_SOURCE = join(PROJECT_ROOT, '..', 'corapan-webapp', 'static', 'css', 'md3');
const SOURCE_DIR = process.env.CORAPAN_MD3_DIR || DEFAULT_SOURCE;

const FILES_TO_VENDOR = [
  'tokens.css',
  'typography.css',
  'layout.css',
  'tokens-legacy-shim.css'
];

/**
 * Main execution
 */
function main() {
  console.log('🎨 Vendoring MD3 Tokens from CORAPAN...\n');
  
  // Validate source directory
  if (!existsSync(SOURCE_DIR)) {
    console.error(`❌ ERROR: Source directory not found: ${SOURCE_DIR}`);
    console.error('');
    console.error('Please ensure corapan-webapp is available at the expected location,');
    console.error('or set CORAPAN_MD3_DIR environment variable to the correct path.');
    console.error('');
    console.error('Example:');
    console.error('  CORAPAN_MD3_DIR=/path/to/corapan-webapp/static/css/md3 npm run vendor:md3');
    process.exit(1);
  }

  // Create vendor directory
  mkdirSync(VENDOR_DIR, { recursive: true });
  
  let successCount = 0;
  let skipCount = 0;

  // Copy each file
  for (const filename of FILES_TO_VENDOR) {
    const sourcePath = join(SOURCE_DIR, filename);
    const destPath = join(VENDOR_DIR, filename);

    if (!existsSync(sourcePath)) {
      console.log(`⊘  ${filename} (not found in source, skipping)`);
      skipCount++;
      continue;
    }

    try {
      const content = readFileSync(sourcePath, 'utf-8');
      writeFileSync(destPath, content, 'utf-8');
      console.log(`✓  ${filename}`);
      successCount++;
    } catch (error) {
      console.error(`✗  ${filename} - ${error.message}`);
    }
  }

  // Summary
  console.log('');
  console.log(`📦 Vendored ${successCount} file(s) successfully`);
  if (skipCount > 0) {
    console.log(`   ${skipCount} file(s) skipped (not found in source)`);
  }
  console.log(`   Source: ${SOURCE_DIR}`);
  console.log(`   Target: ${VENDOR_DIR}`);
  console.log('');
  console.log('✨ Done! Token files are now vendored and ready to commit.');
}

main();
