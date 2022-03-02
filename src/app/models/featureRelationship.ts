/**
 * API Resource Inventory Management
 * ## TMF API Reference: TMF639 - Resource Inventory   ### Release : 19.5 - December 2019  Resource Inventory  API goal is to provide the ability to manage Resources.  ### Operations Resource Inventory API performs the following operations on the resources : - Retrieve an entity or a collection of entities depending on filter criteria - Partial update of an entity (including updating rules) - Create an entity (including default values and creation rules) - Delete an entity (for administration purposes) - Manage notification of events
 *
 * OpenAPI spec version: 4.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { TimePeriod } from './timePeriod';

/**
 * Configuration feature
 */
export interface FeatureRelationship { 
    /**
     * Unique identifier of the target feature.
     */
    id?: string;
    /**
     * This is the name of the target feature.
     */
    name: string;
    /**
     * This is the type of the feature relationship.
     */
    relationshipType: string;
    validFor?: TimePeriod;
}