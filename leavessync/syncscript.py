from cassandra.cluster import Cluster
from cassandra.auth import PlainTextAuthProvider
import uuid
import requests

# Add these lines to fetch and parse the JSON data from the provided URL
response = requests.get("http://167.172.142.105:5000/cassandra-leaves")
data = response.json()

# Then sort the data based on wallabag_created_at (descending)
data = sorted(data, key=lambda x: x["wallabag_created_at"], reverse=True)

# Print the title and wallabag_created_at of the latest four entries
for item in data[:4]:
    print(item["title"], item["wallabag_created_at"])

# configure Astra connection
cloud_config = {
    'secure_connect_bundle': './secure-connect-bucephalus.zip'
}
auth_provider = PlainTextAuthProvider(
    username="uopQvSTLoIMMIDlDRTPkUQGu",
    password="GXR2xOKO1CZ8I5,QJ.R6r.2m_jDpWzB_fQFmw4b71tDw,,B4rP64zMmkMJKU4TeB5,qsSpuMT65eBzSXc,+4XokL1v82GSe3-Tn_KQ4HPwjGptgL+oE6lIOa1bE6pumB"
)

cluster = Cluster(cloud=cloud_config, auth_provider=auth_provider)
session = cluster.connect("content_data")

# Insert these 4 items into your Cassandra table
for item in data[:4]:
    user_id_value = item.get("user_id")
    if not user_id_value:
        # no user_id given in the item, generate a UUID
        user_id_value = uuid.uuid4()
    else:
        # user_id is a string like "1", so just ignore and generate a UUID
        user_id_value = uuid.uuid4()
    
    session.execute("""
        INSERT INTO clean_articles (
            processed,
            wallabag_created_at,
            id,
            content,
            description,
            domain_name,
            has_broken_content,
            has_broken_links,
            http_status,
            language,
            last_sourced_from_wallabag,
            mimetype,
            origin_url,
            preview_picture,
            published_at,
            published_by,
            reading_time,
            tags,
            title,
            updated_at,
            url,
            user_email,
            user_id,
            user_name,
            wallabag_is_archived,
            wallabag_updated_at
        ) VALUES (
            %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s
        )
    """, (
        True,
        item["wallabag_created_at"],
        uuid.uuid4(),
        item.get("content"),
        item.get("description"),
        item.get("domain_name"),
        False,
        False,
        item.get("http_status"),
        item.get("language"),
        item.get("last_sourced_from_wallabag"),
        item.get("mimetype"),
        None, # origin_url not provided
        item.get("preview_picture"),
        None, # published_at not provided
        ','.join(item["published_by"]) if item.get("published_by") else None,
        item.get("reading_time"),
        item.get("tags"),
        item.get("title"),
        item.get("updated_at"),
        item.get("url"),
        item.get("user_email"),
        user_id_value,  # Now a UUID
        item.get("user_name"),
        item.get("wallabag_is_archived"),
        item.get("wallabag_updated_at")
    ))
