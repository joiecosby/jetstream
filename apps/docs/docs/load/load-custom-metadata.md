---
id: load-custom-metadata
title: Load Custom Metadata Records
description: Load Custom Metadata records to Salesforce using a csv or excel file.
keywords:
  [
    salesforce,
    salesforce admin,
    salesforce developer,
    salesforce automation,
    salesforce workbench,
    salesforce metadata,
    soql,
    apex,
    salesforce api,
    custom metadata,
    data load,
    update records,
  ]
sidebar_label: Load Custom Metadata Records
slug: /load/custom-metadata
---

Jetstream allows you to load in Custom Metadata records using a csv or xlsx file just like loading to any other type of object.

## Special Considerations

Custom Metadata records are different from any other type of record in Salesforce, where each record is actually metadata, not a true record.

Because of this, there are some differences from the normal record load process.

- Custom Metadata will always perform an **upsert** based on the `DeveloperName` of the record (this is the normal `Name` field in the Salesforce UI)
- Regardless of whether you are creating new records or updating existing records, All fields will be specified in the load. Any fields that you do not map will be set to their default value (normally `null`).
- Lookup fields requires the API Name of the related object, not the Id of the related record.
  - If your lookup is another custom **Custom Metadata** record, then the you will use the `DeveloperName` of the related record
  - If your lookup is any other type (e.x. **EntityDefinition** or **EntityParticle**), then the you will use the `QualifiedApiName` field of the related record
    - When querying these records when there is a lookup to a **standard** object or field, Salesforce returns the the actual Api Name without going through the relationship, but for **custom** objects or fields, Salesforce will include the Id of that entity. For this reason, it is best to always go through the relationship to include the `QualifiedApiName` for ready to load data.

### Obtaining Metadata using Deploy and Compare Metadata

:::tip

Use the **Deploy and Compare Metadata** features to download existing Custom Metadata records to look at how Salesforce represents the data, this will help you understand how to structure your load file.

:::

<img src={require('./load-metadata-deploy-download-example.png').default} alt="Example of using deploy and compare do download metadata" />

### Obtaining Metadata using Query Builder

:::tip

Use the **Query Builder** to look at existing records. For relationships, make sure to include the `DeveloperName` or `QualifiedApiName` to get a good starting point to prepare your load file.

**When querying records**:

- Use either `Label` or `MasterLabel` to map to **Label**.
- Use either `QualifiedApiName` or `DeveloperName` to map to **DeveloperName**.
- Ignore `Language`, `NamespacePrefix`, and `Id`.

:::

<img src={require('./load-metadata-query-example.png').default} alt="Example of using query to prepare record" />

## Choose object and load file

Custom Metadata objects end with `__mdt` instead of `__c`. Choose the Custom Metadata that you would like to load records against.

You will notice that the type of data load will be restricted to **Upsert** and you will not have the option to specify the ExternalId, because this is always the `DeveloperName`.

After choosing which object you want to make changes to, you will need to provide a file to upload.

<img src={require('./load-metadata-select-object.png').default} alt="Example of using deploy and compare do download metadata" />

**Jetstream supports the following file formats**:

1. CSV (.csv)
2. Excel (.xslx)
3. Google Sheet
   1. Choose the "Google Drive" tab to connect your Google account

Once you choose your file, you will be shown a preview of the data in a table, confirm that the data looks good.

## Map fields

You will need to choose which fields from your CSV should be loaded into Salesforce and you need to map fields from your file to fields in Salesforce.

For relationship fields, you will not be able to related fields like you can with normal data loads.

<img src={require('./load-metadata-mapping-example.png').default} alt="Example of mapping fields" />

## Load data

There are some final options available before loading your data to Salesforce.

### Insert Null Values

This is enabled and required with Custom Metadata records. **All records will be included with each record, even if they are not mapped**.

### Date Format

This will normally be auto-detected based on your locale, but make sure that it matches the format of the dates in your file.

## Load results

Once your data load starts, you will see the results as they are being processed.

For Custom Metadata records, the Metadata API is used to load in data. You can view these on the Deployment Status page in Salesforce.

The results will have some additional properties to indicate if the record was created or updated, but is similar to regular data loads.
